class TextPrinter < Object
    def echo(*args)
       puts "Arguments: " + args.join(', ')
    end

    def echo_uppercase(*args)
       puts "Arguments: " + args.join(', ').upcase
    end

    def echo_lowercase(*args)</p>
       puts "Arguments: " + args.join(', ').downcase
    end
end

method_names = ["echo", "echo_uppercase", "echo_lowercase"]
tprinter = TextPrinter.new()
for mn in method_names do
    tprinter.send(mn, "a", "b", "c", "A", "B", "C")
end
