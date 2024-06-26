import { safeParse } from "valibot";
import axios from "axios";
import { DraftProductSchema, Product, ProductSchema, ProductsSchema } from "../types"
import { strToBoolean } from "../helpers";

type ProductData = {
    [k: string]: FormDataEntryValue;
}

export async function addProduct(data : ProductData){
    try {
        const result = safeParse(DraftProductSchema, {
            name: data.name,
            price: +data.price
        })
        if(result.success){
            const url = `${import.meta.env.VITE_API_URL}/api/products`
            await axios.post(url, {
                name: result.output.name.trim(),
                price: result.output.price
            })
        }else{
            throw new Error('Datos no validos')
        }
    } catch (error) {
        console.log(error)
    }
}

export async function getProducts(){
    try {
        const url = `${import.meta.env.VITE_API_URL}/api/products`
        const { data } = await axios(url)
        const result = safeParse(ProductsSchema, data.data)
        if(result.success){
            return result.output
        }else{
            throw new Error('Error obteniendo los productos...')
        }
    }catch (error) {
        
    }
}

export async function getProductsById(id : Product['id']){
    try {
        const url = `${import.meta.env.VITE_API_URL}/api/products/${id}`
        const { data } = await axios(url)
        const result = safeParse(ProductSchema, data.data)
        if(result.success){
            return result.output
        }else{
            throw new Error('Error obteniendo los productos...')
        }
    }catch (error) {
        console.log(error)
    }
}

export async function updateProduct(data : ProductData, id: Product['id']){
    try {
        const result = safeParse(ProductSchema, {
            id,
            name: data.name,
            price: +data.price,
            availability: strToBoolean(data.availability.toString())
        })
        if(result.success){
            const url = `${import.meta.env.VITE_API_URL}/api/products/${id}`
            await axios.put(url, {
                id: result.output.id,
                name: result.output.name.trim(),
                price: result.output.price,
                availability: result.output.availability
            })
        }
    } catch (error) {
        console.log(error)
    }
}

export async function deleteProduct(id: Product['id']){
    try {
        const url = `${import.meta.env.VITE_API_URL}/api/products/${id}`
        await axios.delete(url)
    } catch (error) {
        console.log(error)
    }
}

export async function updateProductAvailability(id: Product['id']){
    try {
        const url = `${import.meta.env.VITE_API_URL}/api/products/${id}`
        await axios.patch(url)
    } catch (error) {
        console.log(error)
    }
}