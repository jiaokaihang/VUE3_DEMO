import SparkMd5 from 'spark-md5';

//获取文件的唯一MD5标识码

export function getFileMd5(file){
    return new Promise((resolve,reject)=>{
        const fileReader = new FileReader();
        const spark = new SparkMd5.ArrayBuffer()
        fileReader.readAsArrayBuffer(file)
        fileReader.onload = e =>{
            spark.append(e.target.result)
            let md5 = spark.end()
            resolve(md5)
        }
    })
}