# Site Starter

My standard website starter template. Jekyll build hosted on S3/Cloudfront.

## Overview
* [Jekyll](https://jekyllrb.com/): flat file generation
* [Gulp](https://gulpjs.com/): all SCSS, JS and image processing, live reloading
* [Browsersync](https://www.browsersync.io/): real-time cross-device/browser testing
* [RM CSS Utilities](https://github.com/robbiemanson/rm-css-utilities): Underpinning CSS values
* [s3_website](https://github.com/laurilehmijoki/s3_website): deployment
* 12-col responsive grid based on old [Foundation Grid](http://foundation.zurb.com/grid.html)

## Getting started

If you don't have Homebrew, Ruby, Bunlder or Node.js already – follow the [starting from scratch](#starting-from-scratch) instructions first. 

### Configure new site locally
1. `git clone git@github.com:robbiemanson/site-starter.git` into a new directory, or download zip 
2. `bundle install` (to install Gems)
3. `brew install imagemagick` (for Gulp-powered image resizing)
4. `brew install graphicsmagick` (ditto)
5. `npm install` (install NPM packages)

Now just open the site in your text editor and away you go. Some important changes you'll want to make:

1. Find and replace all instances of `examplesite.com` with URL of new site
2. Find and replace instances of `Site Owner`
3. Replace `favicon.png` 

### Configure hosting
* Configure domain on [Route 53](https://console.aws.amazon.com/route53) including `assets.` and `staging.` subdomains (see one of the other examples e.g. mademountain.com)
* Create new `whatthedomainis.com` S3 bucket with [website hosting enabled](https://docs.aws.amazon.com/AmazonS3/latest/dev/EnableWebsiteHosting.html); follow settings of another functioning example e.g. mademountain.com
* Create new `www.whatthedomainis.com` S3 bucket to function as a redirect to actual bucket just created above; see existing functioning example for settings e.g. mademountain.com
* Add `s3_id`, `s3_secret` and `s3_bucket` details in both `s3_website.yml` files
* Create new [CloudFront distributions](https://console.aws.amazon.com/cloudfront/) (see existing examples) for both production and staging URLs, add IDs to each of the relevant `s3_website.yml` files, then replace the Cloudfront URL in [head.html](https://github.com/robbiemanson/site-starter/blob/master/_includes/head.html) 
* Depending on index/homepage name of the site, may need to update 'Home' title in [head.html](https://github.com/robbiemanson/site-starter/blob/master/_includes/head.html)

### Local development
Open terminal window and run:
```bash
$ bundle exec jekyll serve
```

This will serve the site contents and watch for changes.

Open another terminal window. Unless site is being setup/installed from scratch, run:
```bash
$ gulp
```

Optional: resize and minify photos (will take at least a few mins to run):
```bash
$ gulp photos
```

## Hosting and deployment
* Hosted on S3, with CloudFront distribution. Deployed using [s3_website](https://github.com/laurilehmijoki/s3_website).
* Deployment config files live in separate `production` and `staging` folders at root level
* Remember to run `s3_website cfg apply` before pushing, if any changes are made to either config in `s3_website.yml` 

### Staging deploy (staging.examplesite.com)
1. Ensure `asset_url` in `_config.yml` is pointing to correct CloudFront URL
2. `bundle exec jekyll serve` > `gulp deploy-prep` > QA, especially: /pattern-library
3. `s3_website push --config-dir=staging --dry-run` to check changes before pushing
4. `s3_website push --config-dir=staging`

### Production deploy
1. Ensure `asset_url` in `_config.yml` is pointing to correct CloudFront URL
2. `bundle exec jekyll serve` > `gulp deploy-prep` > QA, especially: /pattern-library
3. `s3_website push --config-dir=production --dry-run` to check changes before pushing
4. `s3_website push --config-dir=production`

## To do
* Clean up unused legacy robbiemanson.com stuff
* Pull more of current bespoke CSS into [rm-css-utilities](https://github.com/robbiemanson/rm-css-utilities)
* Remove any unused/redundant layouts

## Writing blog posts
Follow instructions at: http://jekyllrb.com/docs/drafts/

## Starting from scratch

If haven't used Site Starter on your machine before

1. Install [Homebrew](https://brew.sh/)
```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"
```
2. Install [ruby-install](https://github.com/postmodern/ruby-install) (confirm: `ruby-install -V`)
```bash
brew install ruby-install
```
3. Install Ruby 2.3.3 (confirm: check `~/.rubies`, then restart shell)
```bash
ruby-install ruby 2.3.3
```
4. Install [chruby](https://github.com/postmodern/chruby) (confirm: restart shell, then `chruby`)
```bash
brew install chruby
```
5. Switch to newly installed ruby 2.3.3
```bash
chruby 2.3.3
```
6. Add line to `~/.bashrc` or `~/.zshrc`:
```bash
source /usr/local/opt/chruby/share/chruby/chruby.sh
```
7. Enable auto-switching of Ruby version by adding these lines to `~/.bashrc` or `~/.zshrc`: 
```bash
source /usr/local/share/chruby/chruby.sh 
source /usr/local/share/chruby/auto.sh
```
8. Install [Bundler](https://bundler.io/)
```bash
gem install bundler -v '1.13.7'
```
9. [Install Node.js](https://nodejs.org) for npm usage

Now follow instructions to [configure a new site locally](#configure-new-site-locally)!