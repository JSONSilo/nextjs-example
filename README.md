# Example NextJS 13+

Example usage
Rename `template.env` to `.env.development.local` or `.env.local`

### Public 
```bash
curl -X GET \
    -H 'Content-Type: application/json' \
    https://api.jsonsilo.com/public/cd140031-5515-4e1c-aef5-d51fa6df021b
```

### Private
```bash
curl -X GET \
    -H 'X-SILO-KEY: YOUR_API_KEY' \
    -H 'Content-Type: application/json' \
    https://api.jsonsilo.com/98c362fd-a701-4194-a845-6b2ddb7e733c
```