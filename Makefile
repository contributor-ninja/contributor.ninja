REACT_APP_GRAPHQL_ENDPOINT = https://apiv2-index.contributor.ninja/query

HTTP_SERVER = ./node_modules/.bin/http-server -c-1

serve-prod:
	$(HTTP_SERVER) build/

build-prod:
	REACT_APP_GRAPHQL_ENDPOINT=$(REACT_APP_GRAPHQL_ENDPOINT) \
		npm run build

deploy: build-prod
	s3_website cfg apply
	s3_website push
