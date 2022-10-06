
$('body').prepend(/*html*/`
    <header>
        <a href="" class="home">
            <img src="img/logo.png" alt="tex✩ugo's Drag Race Wiki">
        </a>
        <nav>
            <a href="contestants" ${ location.pathname.startsWith('/contestants/') ? 'class="active"' : '' } ><i class="fa-solid fa-users"></i> Contestants</a>
            <a href="progress"    ${ location.pathname.startsWith('/progress/')    ? 'class="active"' : '' } ><i class="fa-solid fa-crown"></i> Progress</a>
            <a href="lip-syncs"   ${ location.pathname.startsWith('/lip-syncs/')   ? 'class="active"' : '' } ><i class="fa-solid fa-microphone-stand"></i> Lip Syncs</a>
            <a href="episodes"    ${ location.pathname.startsWith('/episodes/')    ? 'class="active"' : '' } ><i class="fa-solid fa-tv-retro"></i> Episodes</a>
        </nav>
    </header>
`);

$('body').append(/*html*/`
    <footer>
        <div>Created by <a href="https://twitter.com/espamamapixa" target="_blank">espama</a></div>
        <div>Follow <a href="https://twitter.com/communist_porn_" target="_blank">tex✩ugo</a> on Twitter</div>
        <div>Stream <a href="https://linktr.ee/femmedorm" target="_blank">GFOTY</a></div>
        <div class="socials">
            <a href="https://www.instagram.com/p/CLSpk7Hngna/" target="_blank">
                <i class="fa-brands fa-instagram"></i>
            </a>
            <a href="https://twitter.com/KrisJenner/status/200413753290924032" target="_blank">
                <i class="fa-brands fa-twitter"></i>
            </a>
            <a href="https://www.youtube.com/watch?v=gRhlByMPHtM">
                <i class="fa-brands fa-youtube"></i>
            </a>
        </div>
    </footer>
`);