module ApplicationHelper
  def markdown(text)
    syntax_highlighter(RedCloth.new(text).to_html)
    # RedCloth.new(text).to_html
    # syntax_highlighter(Redcarpet.new(text, *options).to_html).html_safe
  end
  
  def syntax_highlighter(html)
    doc = Nokogiri::HTML(html)
    doc.search("//pre[@lang]").each do |pre|
      pre.replace Albino.colorize(pre.text.rstrip, pre[:lang])
    end
    doc.to_s
  end
end
