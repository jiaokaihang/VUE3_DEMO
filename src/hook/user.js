import {ref,computed} from 'vue'

export const user = ref(null)

export const setUser = (data) => {
    user.value = data
}

export const num = ref(3)

export const setNum = computed(()=>{
    return num.value * num.value
})


