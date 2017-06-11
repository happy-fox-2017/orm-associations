const chai = require('chai');
const models = require('../models');

const expect = chai.expect;
const Teacher = models.Teacher;

describe('Teacher', function() {

  describe('#create()', function() {
    before(function (done) {
      Teacher.destroy({ where: {} }).then(() => done());
    });

    it('should create teachers without error', function (done) {
      const promises = [];
      for (let i = 1; i <= 9; i += 1) {
        promises.push(Teacher.create({
          name: `Teacher - ${i}`,
          email: `myyusuf1911_${i}@gmail.com`,
          phone: `081885657${i}`,
        }));
      }

      Promise.all(promises)
      .then(function (teachers) {
        expect(9).to.equal(teachers.length);
        // assert.equal(19, teachers.length);
        done();
      });
    });
  });
});
