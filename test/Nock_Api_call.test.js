import React from 'react';
import nock from 'nock';
import http from 'http';

nock('http://zombo.com')
  .get('/')
  // .times(4)
  .once()
  .reply(500, 'Ok')


  describe("Api Call", () => {
   it("Check ", () => {
      const res=http.get('http://zombo.com/')
      console.log(res)
   })
  })