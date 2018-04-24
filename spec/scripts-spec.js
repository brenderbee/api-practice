import { API } from './../src/scripts.js';

describe('API Test', function() {

  it('should return a variable containing the API response', function() {
    const newAPI = new API();
    let test = 0;
    expect(test=newAPI.APIRequest()).not.toEqual(0);
  });
});
