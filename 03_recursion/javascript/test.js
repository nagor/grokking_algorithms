describe('Countdown recursion test', () => {
    const { countdown } = require('./01_countdown');
    require('should');
    it('Countdown recursively', () => {
        countdown(5)
            .should.be.an.Number()
            .exactly(5);
    });
});
