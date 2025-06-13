const build = require('../../src/app');

let app;

describe('Temp route', () => {
    beforeEach(() => {
        app = build();
    });
    afterEach(() => {
        app.close();
    });

    it('should return id when temp route called with valid data', async () => {
        const res = await app.inject({
            url: '/api/v1/test',
            method: 'POST',
            body: {
                title: 'test'
            }
        });

        expect(res.statusCode).toBe(201);
        expect(res.json().id).toBeDefined();

    });

    it('should return 200 for GET route', async () => {
        const res = await app.inject({
          method: 'GET',
          url: '/api/v1/test/',
        });
    
        expect(res.statusCode).toBe(200);
      });
});