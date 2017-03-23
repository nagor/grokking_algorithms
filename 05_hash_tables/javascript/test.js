describe('Hash table tests', () => {
    const { checkVoter } = require('./02_check_voter');
    require('should');
    it('can add only one voter', () => {
        checkVoter('tom').should.be.exactly(false); // let them vote!
        checkVoter('mike').should.be.exactly(false); // let them vote!
        checkVoter('mike').should.be.exactly(true); // kick them out!
    });
});
