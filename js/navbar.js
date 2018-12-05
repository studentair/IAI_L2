if (document.querySelector(".name").innerHTML === "home")
    {
        let nav = '<ul>\n' +
            '        <li><a class="active" href="index.html">Strona główna</a></li>\n' +
            '        <li><a href="map.html">Mapa</a></li>\n' +
            '        <li><a href="kontakt.html">Kontakt</a></li>\n' +
            '        <li><a href="quiz.html">Quiz</a></li>\n' +
            '    </ul>';

        let divNav = document.querySelector(".navv");

        divNav.innerHTML = nav;
    }

    if (document.querySelector(".name").innerHTML === "map")
    {
        let nav = '<ul>\n' +
            '        <li><a href="index.html">Strona główna</a></li>\n' +
            '        <li><a class="active" href="map.html">Mapa</a></li>\n' +
            '        <li><a href="kontakt.html">Kontakt</a></li>\n' +
            '        <li><a href="quiz.html">Quiz</a></li>\n' +
            '    </ul>';

        let divNav = document.querySelector(".navv");

        divNav.innerHTML = nav;
    }

    if (document.querySelector(".name").innerHTML === "kontakt")
    {
        let nav = '<ul>\n' +
            '        <li><a href="index.html">Strona główna</a></li>\n' +
            '        <li><a href="map.html">Mapa</a></li>\n' +
            '        <li><a class="active" href="kontakt.html">Kontakt</a></li>\n' +
            '        <li><a href="quiz.html">Quiz</a></li>\n' +
            '    </ul>';

        let divNav = document.querySelector(".navv");

        divNav.innerHTML = nav;
    }

    if (document.querySelector(".name").innerHTML === "quiz")
    {
        let nav = '<ul>\n' +
            '        <li><a href="index.html">Strona główna</a></li>\n' +
            '        <li><a href="map.html">Mapa</a></li>\n' +
            '        <li><a href="kontakt.html">Kontakt</a></li>\n' +
            '        <li><a class="active" href="quiz.html">Quiz</a></li>\n' +
            '    </ul>';

        let divNav = document.querySelector(".navv");

        divNav.innerHTML = nav;
    }