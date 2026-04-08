document.addEventListener('DOMContentLoaded', () => {
    // Insert current year
    const anoEl = document.getElementById('ano');
    if (anoEl) anoEl.textContent = new Date().getFullYear();

    // Nav toggle (mobile)
    const navToggle = document.getElementById('navToggle');
    const siteNav = document.getElementById('siteNav');
    if (navToggle && siteNav) {
        navToggle.addEventListener('click', () => {
            const expanded = navToggle.getAttribute('aria-expanded') === 'true';
            navToggle.setAttribute('aria-expanded', String(!expanded));
            siteNav.setAttribute('aria-hidden', String(expanded));
        });
        // Close nav on escape
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                navToggle.setAttribute('aria-expanded', 'false');
                siteNav.setAttribute('aria-hidden', 'true');
            }
        });
    }

    // Server status (simple): perform a HEAD fetch to /
    const statusEl = document.querySelector('.server-status');
    if (statusEl) {
        fetch('/', { method: 'HEAD' }).then(res => {
            if (res.ok) {
                statusEl.textContent = 'Online — resposta OK';
                statusEl.classList.add('online');
            } else {
                statusEl.textContent = 'Serviço iniciado, mas retornou: ' + res.status;
            }
        }).catch(err => {
            statusEl.textContent = 'Erro ao verificar servidor';
            console.error('Status check failed', err);
        });
    }

    // Load projects via API and render accessible list
    const loadBtn = document.getElementById('loadProjects');
    const list = document.getElementById('projectsList');
    async function loadProjects() {
        if (!list) return;
        list.innerHTML = '<li class="muted">Carregando...</li>';
        try {
            const res = await fetch('/projetos');
            if (!res.ok) throw new Error('Erro na resposta');
            const data = await res.json();
            if (!Array.isArray(data) || data.length === 0) {
                list.innerHTML = '<li class="muted">Nenhum projeto encontrado.</li>';
                return;
            }
            list.innerHTML = '';
            data.forEach(p => {
                const li = document.createElement('li');
                li.setAttribute('role', 'listitem');
                const title = document.createElement('span');
                title.textContent = p.nome + ' — ' + p.tecnologia;
                const link = document.createElement('a');
                link.href = '/projetos/' + p.id;
                link.textContent = 'Ver';
                link.setAttribute('aria-label', `Ver detalhes do projeto ${p.nome}`);
                li.appendChild(title);
                li.appendChild(link);
                list.appendChild(li);
            });
        } catch (err) {
            list.innerHTML = '<li class="muted">Erro ao carregar projetos.</li>';
            console.error(err);
        }
    }
    if (loadBtn) loadBtn.addEventListener('click', loadProjects);
    // Load once automatically for convenience
    if (loadBtn) loadBtn.click();
});
