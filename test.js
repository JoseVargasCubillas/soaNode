const request = require('supertest');
const express = require('express');

const app =express();
app.get('/api/v1/welcome', (req,res) => {
    res.status(200).send('hola amigo sus');
});

describe('GET /api/v1/welcome', () => {
    it('respond with hello world', (done) => {
        request(app)
        .get('/api/v1/welcome')
        .expect('hola amigo sus', done);
    });
});