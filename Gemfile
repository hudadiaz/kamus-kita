source 'https://rubygems.org'

git_source(:github) do |repo_name|
  repo_name = "#{repo_name}/#{repo_name}" unless repo_name.include?("/")
  "https://github.com/#{repo_name}.git"
end


gem 'rails', '~> 5.0.2'
gem 'puma', '~> 3.0'

gem 'pg'
gem 'pg_search'
gem 'sucker_punch', '~> 2.0'

gem 'activeadmin', github: 'activeadmin'

gem 'twitter'
gem 'rack-tracker'
gem 'rack-cors', :require => 'rack/cors'

gem 'sass-rails', '~> 5.0'
gem 'uglifier', '>= 1.3.0'
gem 'coffee-rails', '~> 4.2'
gem 'foundation-rails'
gem 'nprogress-rails'

gem 'jquery-rails'
gem 'turbolinks', '~> 5'
gem 'jbuilder', '~> 2.5'
gem 'clipboard-rails'
gem 'local_time'

gem 'devise'
gem 'mailgun_rails'

gem 'friendly_id'
gem 'kaminari'
gem 'acts-as-taggable-on', '~> 4.0'
gem 'meta-tags'
gem 'sitemap_generator'

gem 'fog-aws'
gem 'carrierwave', '~> 1.0'
gem 'imgkit'
gem 'wkhtmltoimage-binary'

group :development, :test do
  gem 'byebug', platform: :mri
end

group :development do
  gem 'railroady'
  gem 'web-console', '>= 3.3.0'
  gem 'listen', '~> 3.0.5'
  gem 'spring'
  gem 'spring-watcher-listen', '~> 2.0.0'
  gem 'faker'
end

gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]
