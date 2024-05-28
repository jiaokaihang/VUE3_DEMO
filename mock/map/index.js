// import {faker} from '@faker-js/faker/dist/cjs/locale/zh_CN'
import {faker} from "@faker-js/faker/locale/zh_CN";
import Mock from 'mockjs'
const mapList = ()=> {
    const result= [];
    for (let index = 0; index < 1000; index++) {
        result.push({
            plateNumber: `冀A${faker.string.numeric({
                length: 5
            })}${faker.string.alphanumeric({
                casing: "upper"
            })}`,
            driver: faker.person.firstName(),
            orientation: faker.number.int({ min: 1, max: 360 }),
            lng: faker.location.latitude({ max: 115.2, min: 113.3 }),
            lat: faker.location.latitude({ max: 38.4, min: 37.2 })
        });
    }
    return result;
};


Mock.setup({
    timeout:'200-600'
})
Mock.mock(
    new RegExp('^/get-map-info$'),
    'get',
    (req)=>{
        console.log(req)
        return {
            success:true,
            data:mapList()
        }
    }
)

