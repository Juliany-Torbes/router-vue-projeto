<script setup>
import {ref, watch} from 'vue';
import {
    ordenarPorData,
    filtrarPendentes,
    montarTextoDaProxima, 
    passarNoFiltro
} from './agenda.js';
import ItemEntrega from './components/ItemEntrega.vue';
import FormularioEntrega from './components/FormularioEntrega.vue';
import { apagarEntrega } from './entregas';
defineProps({
    entrega: Object
});

const emit = defineEmits(['apagar']);
const CHAVE = 'agenda-de-entregas-vue';
</script>

</script>

<template>
    <li class="apagarEntrega" :class="{ feita: apagarEntrega }" :data-tipo="entrega.tipo">
        <span class="data">{{ formatarData(entrega.data) }}</span>
        <div class="info">
            <strong class="materia">{{ entrega.materia }}</strong>
            <span class="etiqueta">{{ nomearTipo(entrega.tipo) }}</span>
        </div>
        <div class="acoes">
            <button type="button" class="botao-apagar" @click="emit('apagar', entrega)">Apagar</button>
        </div>
    </li>
</template>