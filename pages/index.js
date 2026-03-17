function Home() {
    return (
        <>
            <link
                href="https://fonts.googleapis.com/css2?family=Fira+Code&display=swap"
                rel="stylesheet"
            />

            <div
                style={{
                    backgroundColor: "#1e1e1e",
                    color: "#eaeaea",
                    minHeight: "100vh",
                    padding: "20px",
                    fontFamily: "'Fira Code', monospace"
                }}
            >
                <h1>Um desafio importante</h1>
                <h2>como fiz sem querer o desafio do Deschamps</h2>
                --------------------------------------------------
                <h3>Introdução</h3>
                <p>Pra começar, nossa que site bonito, não era pra ser simples? ESTÁ SIMPLES!</p>
                <p>Usei todo o conhecimento básico de CSS que eu tinha e pesquisei como deixar o componente com mais coisas, apenas isso. Cores bonitas (me inspirei no ChatGPT) e fonte de programador (Fira Code).</p>
                <p>Já tinha feito algo parecido assim antes mas esse é meu limite de frontend eu juro.</p>
                --------------------------------------------------
                <h3>Contexto</h3>
                <p>Estava desenvolvendo minha API do servidor do meu TCC, essa API roda em uma placa Rock Pi (semelhante a raspberry pi) e eu queria poder acessar fora de casa.</p>
                <p>Após algumas pesquisas, descobri que dava pra criar um Túnel usando a Cloudflare pra ter acesso ao meu servidor(Rock Pi), como meu servidor eu estava usando Docker Compose,</p>
                <p>bastava criar um novo serviço usando a imagem da cloudflare, como eu não tinha arquivo de túnel configurado, a cloudflare criava uma url aleatória e temporária pra mim, exemplo: https://modern-stack-42d9.trycloudflare.com.</p>
                --------------------------------------------------
                <h3>O Problema</h3>
                <p>UAU! Funcionou!</p>
                <p>Meu servidor caseiro estava na internet!</p>
                <p>Passando por uma infraestrutura segura como a da Cloudflare!</p>
                <p>Mas algo me incomodava...</p>
                <p>A URL ERA HORRIVEL! Eu não queria colocar isso no TCC e ela sempre mudava após desligar o container.</p>
                --------------------------------------------------
                <h3>Solução (?)</h3>
                
                <p>A muito tempo atrás, quando estava no inicio da faculdade, me lembro de um vídeo do Deschamps que o título era:</p>
                <a href="https://youtu.be/EW7m2WIvFgQ?si=DZtF9FK8QmY6JWq3">Como Eu Programo e Hospedo Sites da Forma Mais Moderna que Existe [GUIA DEFINITIVO]</a>
                <p>Desde então, sempre que eu queria deixar algum frontend rodando de forma gratuita na internet eu usava a Vercel (percebi que várias pessoas também fizeram assim).</p>
                <p>Como o meu TCC teria uma parte de frontend (que inclusive já iniciei, usando Vue.js, mas talvez troque pra Next.js por causa do Curso)</p>
                <p>Mas como eu rodo o backend do meu server na Vercel? Da pra fazer isso? Não queria reassistir o vídeo (foi mal Deschamps, deu preguiça) e também não queria ter duas URLs, uma pro front e uma pro back.</p>
                <p>Disclaimer: O meu "server caseiro", ta rodando todo o backend porque tem outras coisas que ele serve localmente também, não da pra ser tudo na nuvem, precisa ser local first, na verdade esse "servidor caseiro" em sistemas embarcados chamamos de ECU (eletronic computer unit) e ela controla dispositivos e sensores localmente. Atualmente com IoT que essa ECU ou sensores podem inclusive acessar a internet.</p>
                --------------------------------------------------

                <h3>Solução Definitiva</h3>
                <p>Essa solução veio pq ano passado várias big techs tiveram um problema parecido em seus serviços de Nuvem: DNS!</p>
                <p>Google Cloud, AWS, Claudflare, depois que foi resolvido o problema, todos foram basicamente DNS.</p>
                <p>Eu como sou muito curioso fui ver o que era isso, já tinha ouvido falar mas não entendia a fundo.</p>
                <p>Basicamente é: Um servidor com IP fixo CONHECIDO que sabe qual URL pertence a cada IP fixo de outros servidores/sites.</p>
                <p>escreve "ping www.google.com" no terminal e vai conseguir descobrir o IP do servidor do google que acessou.</p>
                <p>Então se eu usar a Cloudflare, consigo por um domínio(url) própria minha apontando pro meu servidor caseiro e pro meu frontend.</p>
                <p>Imaginei que isso sairia uma fortuna e pasmem, a cloudflare é de graça pra usar o DNS deles (plano gratuito).</p>
                <p>Imaginei que a Vercel era outra fortuna e pasmem, pra usar DNS na vercel é de graça também (plano gratuito).</p>
                <p>Imaginei que ter um dóminio era outra fortuna e pasmem, dependendo o domínio, é muito barato (total 2 dólares).</p>
                <a href="https://nicolas-lopes.space/">link: nicolas-lopes.space/</a>
                <p>Acessando o link vai abrir uma página de um simples index.html, como se fosse um cartão de negócios antigo.</p>
                <p>Caso alguém tenha interesse em me contratar para sistemas embarcados ou dev backend junior, estou praticamente formado em Engenharia Mecatrônica e me formei em ADS ano passado.</p>
                <p>Amo tecnologia, sou muito curioso e sempre estou estudando cada vez mais, também estou estudando Engenharia de Software pra me aprofundar mais na criação de sistemas complexos.</p>
                <p>Tenho certeza que vou ser uma ótima adição no seu time!</p>
                <a href="https://api.nicolas-lopes.space/">a rota da api do meu tcc fica na mesma url, usando o tunel da cloudflare e um subdominio</a>
                <p>(provavelmente vc não vai conseguir acessar pois só funciona com o servidor caseiro ligado e não coloquei nenhum fallback, a api precisa de autenticação tb então só eu tenho acesso XD)</p>
                <p>enventuais side projects vou sempre usar essa url.</p>

                <h3>Obrigado por ler até aqui.</h3>

            </div>
        </>
    )
}

export default Home;