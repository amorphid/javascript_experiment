require "pry"

javascript_experiment = proc do |env|
  [
    # Why be 200 when you can be a 418?
    # http://en.wikipedia.org/wiki/List_of_HTTP_status_codes
    418,
    {
      "Content-Type" => "text/html"
    },
    [
      ERB.new(
        File.read("./html_pages/teapot.html.erb")
      ).result
    ]
  ]
end

run javascript_experiment
