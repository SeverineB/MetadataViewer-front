/**
 * Import
 */
import React from 'react';
import { should } from 'chai';

// Components
import imageReducer, { initialState } from '../../src/reducers/image.reducer';
import { saveFiles } from '../../src/actions/image.actions';

should();

describe.only('reducer for images', () => {
  describe('structure', () => {
    it('should be a function', () => {
      imageReducer.should.be.a('function');
    });

    it('should return initial state when called without arguments', () => {
      imageReducer().should.be.an('object');
      imageReducer().should.be.eql(initialState);
    });
  });

  describe('with actions', () => {
    it('should return a modified state when receive SAVE_FILES', () => {
      const newImages = [{ image: 'image' }, { image: 'image' }];
      imageReducer({ isLoading: false, files: [] }, saveFiles(newImages)).should.be.eql({
        isLoading: false,
        files: newImages,
      });
    });
  });
});
