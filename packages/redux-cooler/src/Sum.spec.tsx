import sum from './Sum';

describe('Sum suit', () => {
    it('should do a sum of two numbers', () => {
        expect(sum(10, 10)).toBe(20);
    });
});