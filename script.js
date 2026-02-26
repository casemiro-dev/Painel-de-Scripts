// Conexão usando o arquivo de configuração público
const _supabase = supabase.createClient(SUPABASE_CONFIG.URL, SUPABASE_CONFIG.KEY);

async function carregarDadosDoSupabase() {
    try {
        const { data: scripts, error: err1 } = await _supabase.from('scripts').select('*').order('setor', { ascending: true }).order('codigo', { ascending: true });
        const { data: avisos, error: err2 } = await _supabase.from('avisos').select('*').order('created_at', { ascending: false });

        if (err1 || err2) throw (err1 || err2);
        renderizarTela(scripts, avisos);
    } catch (error) {
        console.error("Erro ao carregar dados:", error);
    }
}

function renderizarTela(scripts, avisos) {
    const corpoTabela = document.getElementById('corpo-tabela');
    if (corpoTabela) {
        corpoTabela.innerHTML = scripts.map(item => `
            <tr class="hover:bg-gray-50 transition">
                <td class="p-3 border-b text-center text-gray-400">•</td>
                <td class="p-3 border-b text-gray-600 font-medium">${item.setor}</td>
                <td class="p-3 border-b font-mono font-bold text-indigo-600">${item.codigo}</td>
                <td class="p-3 border-b text-gray-700">${item.mensagem}</td>
            </tr>
        `).join('');
    }

    const containerAvisos = document.getElementById('container-avisos');
    if (containerAvisos) {
        containerAvisos.innerHTML = avisos.length > 0 
            ? avisos.map(av => `<div class="bg-gray-100 p-3 mb-2 rounded border-l-4 border-indigo-500 text-gray-700 text-sm">${av.texto}</div>`).join('')
            : '<p class="text-gray-400 text-center py-4 text-sm">Nenhum aviso no momento.</p>';
    }
    atualizarBadgeSino(avisos.length);
}

function atualizarBadgeSino(totalAvisos) {
    const btnAvisos = document.getElementById('btn-avisos');
    if (!btnAvisos) return;
    const antigo = document.getElementById('badge-sino');
    if (antigo) antigo.remove();

    if (totalAvisos > 0) {
        const span = document.createElement('span');
        span.id = 'badge-sino';
        span.className = "absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-bold h-5 w-5 rounded-full flex items-center justify-center border-2 border-white";
        span.textContent = totalAvisos;
        btnAvisos.appendChild(span);
    }
}

async function enviarSugestao() {
    const input = document.getElementById('input-sugestao');
    if (!input || input.value.trim() === "") return alert("Escreva sua sugestão antes de enviar!");

    const { error } = await _supabase.from('sugestoes').insert([
        { texto: input.value, data: new Date().toLocaleString('pt-BR') }
    ]);

    if (!error) {
        alert("Obrigado! Sua sugestão foi enviada.");
        input.value = "";
    } else {
        alert("Erro ao enviar. Tente novamente mais tarde.");
    }
}

// Escuta em Tempo Real (Realtime)
_supabase.channel('db-changes')
  .on('postgres_changes', { event: '*', schema: 'public', table: 'scripts' }, carregarDadosDoSupabase)
  .on('postgres_changes', { event: '*', schema: 'public', table: 'avisos' }, carregarDadosDoSupabase)
  .subscribe();

document.addEventListener('DOMContentLoaded', () => {
    carregarDadosDoSupabase();
    
    document.getElementById('btn-avisos').onclick = () => document.getElementById('modal-avisos').classList.remove('hidden');
    document.getElementById('fechar-modal').onclick = () => document.getElementById('modal-avisos').classList.add('hidden');
    document.getElementById('btn-enviar-sugestao').onclick = enviarSugestao;
});

