import React, { useState, useEffect, Suspense } from 'react'
// import { unstable_createResource as createResource } from 'react-cache'
import fetchPokemon from './fetch-pokemon'
import HooksReducer from './HooksReducer'

function useCounter(initialState) {
  const [count, setCount] = useState(initialState)

  useEffect(
    () => {
      console.log(count)
    },
    [count]
  )
  const increment = () => setCount(count + 1)
  return { count, increment }
}

const cache = {}
function createResourceCustom(fn) {
  return {
    read(id) {
      const data = cache[id]
      if (!data) {
        const promise = fn(id).then(p => (cache[id] = p))
        throw promise // when throw suspense will re-render
      }
      return data
    }
  }
}

// const myPokemon = createResource(fetchPokemon)
const myPokemon = createResourceCustom(fetchPokemon)

function PokemonInfo({ pokemonName }) {
  const pokemon = myPokemon.read(pokemonName)
  return <pre>{JSON.stringify(pokemon || 'Unknown', null, 2)}</pre>
}

function Hooks() {
  const { count, increment } = useCounter(0)

  const [pokemonName, setPokemonName] = useState(null)
  function handleSubmit(e) {
    e.preventDefault()
    setPokemonName(e.target.elements.pokemonName.value)
  }
  return (
    <div>
      <button data-testid="button-counter" onClick={increment}>
        Count: {count}
      </button>
      <form onSubmit={handleSubmit}>
        <label htmlFor="pokemonName-input">Pokemon Name (ie Pikachu)</label>
        <input id="pokemonName-input" name="pokemonName" />
        <button type="submit">Submit</button>
      </form>
      <div>
        {pokemonName ? (
          <Suspense fallback={<div>loading...</div>}>
            <PokemonInfo pokemonName={pokemonName} />
          </Suspense>
        ) : null}
      </div>
      <HooksReducer />
    </div>
  )
}

export default Hooks

// https://github.com/kentcdodds/react-hooks-and-suspense-egghead-playlist/blob/master/src/lessons/14-react-cache.js
// https://egghead.io/lessons/react-optimize-suspense-http-requests-with-createresource-from-react-cache-af2c583d?pl=react-hooks-and-suspense-650307f2
