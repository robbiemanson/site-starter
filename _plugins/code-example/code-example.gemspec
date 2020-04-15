Gem::Specification.new do |s|
  s.name               = "code-example"
  s.version            = "0.1.0"
  s.default_executable = "code-example"

  s.required_rubygems_version = Gem::Requirement.new(">= 0") if s.respond_to? :required_rubygems_version=
  s.authors = ["Robbie Manson"]
  s.date = %q{2017-11-05}
  s.description = %q{Gem to generate Pattern Library code examples}
  s.email = %q{example@examplesite.com}
  s.files = ["lib/code-example.rb"]
  s.require_paths = ["lib"]
  s.summary = %q{Code Examples!}

  if s.respond_to? :specification_version then
    s.specification_version = 3

    if Gem::Version.new(Gem::VERSION) >= Gem::Version.new('1.2.0') then
    else
    end
  else
  end
end
