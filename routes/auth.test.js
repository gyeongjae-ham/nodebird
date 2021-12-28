const request = require('supertest');
const {sequelize} = require('../models');
const app = require('../app');

beforeAll(async () => {
    await sequelize.sync();
});

describe('POST /join', () => {
    test('로그인 안 했으면 가입', (done) => {
        request(app)
            .post('/auth/join')
            .send({
                email: 'hiyee0619@gmail.com',
                nickname: 'gyeongjae',
                password: 'nodebird123'
            })
            .expect('Location', '/join?error=exist')
            .expect(302, done);
    });
});

describe('POST /login', () => {
    test('로그인 수행',  (done) => {
        request(app)
            .post('/auth/login')
            .send({
                email: 'hiyee0619@gmail.com',
                password: 'nodebird123'
            })
            .expect('Location', '/')
            .expect(302, done);
    });
});


//
// describe('GET /logout', () => {
//
// });