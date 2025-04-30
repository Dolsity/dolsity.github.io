$(document).ready(function() {
    var app = document.getElementById("laptop_typewriter");
    var typewriter = new Typewriter(app, {
        delay: 75
    });

    typewriter
        .typeString(
            '<span class="purple">import</span> <span class="tan">human</span>'
        )
        .pauseFor(500)
        .typeString("<br>")
        .typeString("<br>")
        .typeString(
            '<span class="purple">class</span> <span class="tan">Developer</span><span class="parentheses">(</span><span class="tan">human</span>.<span class="light_tan">Human</span><span class="parentheses">)</span>:'
        )
        .pauseFor(500)
        .typeString("<br>")
        .typeString(
            '<span class="indent-once"><span class="purple">def __init__</span></span>(<span class="light_blue">self</span>, <span class="light_blue">name</span>):'
        )
        .pauseFor(500)
        .typeString("<br>")
        .typeString(
            '<span class="indent-twice"><span class="tan">super</span>().<span class="purple">__init__</span>(<span class="light_blue">name</span>)</span>'
        )
        .typeString("<br>")
        .typeString("<br>")
        .typeString(
            '<span class="indent-once"><span class="purple">def</span> <span class="grey">greeting</span>(<span class="light_blue">self</span>)</span>:'
        )
        .typeString("<br>")
        .typeString(
            '<span class="indent-twice"><span class="purple">return f</span><span class="string">"Hello! My name is <span class="white">{</span><span class="light_blue">self</span><span class="white">.name}</span>!"</span></span>'
        )
        .typeString("<br>")
        .typeString("<br>")
        .pauseFor(500)
        .typeString(
            '<span class="light_blue">get_human</span> = <span class="tan">Developer</span>(<span class="string">"Dolsity"</span>)'
        )
        .pauseFor(500)
        .typeString("<br>")
        .typeString("<br>")
        .typeString('<span class="grey">print</span>(<span class="light_blue">get_human</span>.<span class="grey">greeting</span><span class="tan">()</span>)')
        .start();
});