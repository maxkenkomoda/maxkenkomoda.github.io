FROM ruby:2.7.2 as builder
WORKDIR /app
RUN gem install bundler:2.2.4

COPY Gemfile Gemfile.lock ./
RUN bundle

COPY ./ ./
RUN bundle exec jekyll build

FROM nginx:alpine as server
COPY --from=builder /app/_site /usr/share/nginx/html

ENV PORT 8080
ENV HOST 0.0.0.0
EXPOSE 8080
COPY nginx.conf /etc/nginx/conf.d/configfile.template
CMD sh -c "envsubst '\$PORT' < /etc/nginx/conf.d/configfile.template > /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'"

