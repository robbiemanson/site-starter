# lock bundler version
if (version = Gem::Version.new(Bundler::VERSION)) < Gem::Version.new('1.13.7')
  abort "Bundler version >= 1.13.7 is required. You are running #{version}"
end

source 'https://rubygems.org'

ruby '2.3.3', :patchlevel => '222'

gem 'jekyll', '3.6.3'
gem 'rouge', '1.10.1'
gem 'sass', '3.4.18'
gem 's3_website', '3.4.0'

group :jekyll_plugins do
  gem 'code-example', '0.1.0', :path => './_plugins/code-example'
  gem 'jekyll_inline_highlight', '3.0'
end
