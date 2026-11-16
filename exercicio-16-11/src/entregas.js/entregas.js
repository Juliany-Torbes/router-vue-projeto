import {ref, watch} from 'vue';

const CHAVE = 'entregas';

const entregas = ref([]);
function carregarEntregas() {
    const entregasSalvas = localStorage.getItem(CHAVE);
    if (entregasSalvas) {
        entregas.value = JSON.parse(entregasSalvas);
    }
}

function salvarEntregas() {
    localStorage.setItem(CHAVE, JSON.stringify(entregas.value));
}

watch(entregas, salvarEntregas, { deep: true }; => {
    salvarEntregas();
}, { deep: true})


export function adicionarEntrega(texto, data) {
    entregas.value.push({ texto, data });
        id: Date.now(),
        materia: materia.value.trim(),
        tipo: tipo.value,
        data: data.value,
        feita: false
    };

    export function alterarFeita(id) {
        const item = entregas.value.find(e => e.id === id)
        if (item) {
            item.feita = !item.feita
        }
    }

    export function apagarEntrega(id) {
        entregas.value = entregas.value.filter(e => e.id !=id)
    }