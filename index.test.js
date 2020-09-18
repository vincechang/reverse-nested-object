const { isEqual } = require('lodash');
const reverseNestedObject = require('./index');

test('should reverse nested object', () => {
  const inputValue = {
    hired: {
      be: {
        to: {
          deserve: 'I',
        },
      },
    },
  };

  const outputValue = {
    I: {
      deserve: {
        to: {
          be: 'hired',
        },
      },
    },
  };

  expect(isEqual(reverseNestedObject(inputValue), outputValue)).toBeTruthy();
});
