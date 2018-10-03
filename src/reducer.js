import { SELECT_NEXT_BEER, MATCH_BEER } from './actions';

const reducer = (state = {}, action) => {
  switch (action.type) {
  case SELECT_NEXT_BEER: {
    const { activeOne, beers } = state;
    if (activeOne.id === -1) { return state; }
    const [firstBeer, ...othersBeers] = beers;
    const newBeers = [...othersBeers];
    if (Object.keys(activeOne).length !== 0) {
      newBeers.push(activeOne);
    }
    return { ...state, beers: newBeers, activeOne: firstBeer };
  }
  case MATCH_BEER: {
    const { activeOne, matchedBeers, beers } = state;
    if (activeOne.id === -1) { return state; }
    const newMatched = [...matchedBeers, activeOne];
    const [firstBeer, ...othersBeers] = beers;
    const newBeers = [...othersBeers];
    let activeTemp = firstBeer;
    if (firstBeer === undefined) {
      activeTemp = {
        id: -1,
        name: 'No more beers',
        image: '',
      };
    }
    return {
      ...state,
      matchedBeers: newMatched,
      beers: newBeers,
      activeOne: activeTemp,
    };
  }
  default: {
    return state;
  }
  }
};

export default reducer;
