bot-install:


bot-build
	docker-compose build bot

api-build:
	docker-compose build api

db-up:
	docker-compose up db
	docker-compose up pg-admin

prune:
	@docker system prune -a -f
	@docker image prune -f
