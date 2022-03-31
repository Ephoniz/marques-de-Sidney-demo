import React from 'react';

const products = [
    {
        modelo: "camiseta",
        unidades: [
            { 
                id: 0,
                name: "gachapon",
                price : 99.99,
                PrimaryPhotos: ["https://images-ext-2.discordapp.net/external/U54E_hdCTJN1hQJIMaeSVq6fX6uvLU95-O5Y8GDUDk0/https/i.imgur.com/ANr2keG.jpg",
                "https://images-ext-1.discordapp.net/external/TCuX4FoXRzhyBqGtAba56HfDhZwx4FMOR1aJVZO1LZU/https/i.imgur.com/Zlr9c2R.jpg",
                "https://images-ext-1.discordapp.net/external/AFyz8a1ZHKHXXbRa24efHOLBhWQJjIjd9Li7C4DerSo/https/i.imgur.com/guMzNf0.jpg",
                "https://images-ext-1.discordapp.net/external/3I816Vdn3U9b5O2VcT1RPepiHh-bFdwQ_4kmRlulgWc/https/i.imgur.com/gT96mHG.jpg?width=1860&height=1245",
                "https://images-ext-1.discordapp.net/external/D5pmNhz8DHmfOuuJ3Vctdbs1Eg-PQtNbs7YYew9YimY/https/i.imgur.com/yfYUlsu.jpg?width=1860&height=1245"
                ],
                redPhoto: "",
                bluePhoto: "",
                greenPhoto: "",
                type: "camiseta",
                colors: ["green"],
                sizes: ["S", "M", "L", "XL", "XXL"],
                size_description: "https://images-ext-1.discordapp.net/external/ce4AxK-DmyN-LpwxZMDyUQad6J8Haz57GMa6x4Srglc/https/i.imgur.com/WO5tY2n.png",
                info: "MENSAJE INFORMATIVO"
             }
        ]
    },

    {
        modelo: "sudadera",
        unidades: [
            { 
                id: 1,
                name: "god variety",
                price : 99.99,
                black: ["https://images-ext-2.discordapp.net/external/_nHLOlS4qRMSWq4DCDhozNyvwWDCSIfs0xy9eZcze9Q/https/i.imgur.com/tYH5Fti.jpg",
                "https://images-ext-2.discordapp.net/external/ah3DdkIpmoeO8HZAhdcdBUqqavFLdmLBA7Jm3PU9lEQ/https/i.imgur.com/8wQFdbp.jpg",
                "https://images-ext-2.discordapp.net/external/lyj4LeQu3OskRgYKaXzg91_u95zQ74J-dnJr9j3Wp9A/https/i.imgur.com/hLXytut.jpg",
                "https://images-ext-1.discordapp.net/external/HzOijtg0tsndandaYT5SF05kW-1FKMJXukC554vnDz8/https/i.imgur.com/p4HIEDL.jpg"
                ],
                white: ["https://images-ext-1.discordapp.net/external/LvbAg-Uq20wWIhRfEFq-CtxzrQU1JcsONZaKVoqrIag/https/i.imgur.com/iLZCIzZ.jpg",
                "https://images-ext-1.discordapp.net/external/QrMBVkHF9dHUQREveHWuHC8wzeOngT7DL0KeONJmI8Q/https/i.imgur.com/7Hl65kt.jpg",
                "https://images-ext-2.discordapp.net/external/w8L7DrUZaJG03vEdek_VkezsmDyvLsXWzOfcavc06rM/https/i.imgur.com/1QBv01q.jpg",
                "https://images-ext-2.discordapp.net/external/w8L7DrUZaJG03vEdek_VkezsmDyvLsXWzOfcavc06rM/https/i.imgur.com/1QBv01q.jpg"
                ],
                type: "sudadera",
                colors: ["white", "black"],
                sizes: ["S", "M", "L", "XL", "XXL"],
                size_description: "https://images-ext-1.discordapp.net/external/APBFMlL_kkOH16nqAevU0vS8FevH-DrAFZCd77K-uak/https/i.imgur.com/eAirq0A.png",
                info: "MENSAJE INFORMATIVO"
             }
        ]
    },
    {
        modelo: "sudadera",
        unidades: [
            { 
                id: 2,
                name: "Let's Go",
                price : 99.99,
                white: ["https://images-ext-1.discordapp.net/external/MNpXyz0_clPGhFjl9D5hM5XvkxXaj6ZPCvcsPT4ifr0/https/i.imgur.com/REPS0Gj.jpg",
                "https://images-ext-1.discordapp.net/external/dQ2ClmsMlLsi43zgq_hDpnVE3HF97O4f7q8vXA4qRIs/https/i.imgur.com/HIqPh6a.jpg",
                "https://images-ext-2.discordapp.net/external/ak-VA4M881-xukDZBXNJvrXNDy22nfa6TTKqHmg-8pE/https/i.imgur.com/e5rc6xF.jpg",
                "https://images-ext-1.discordapp.net/external/y3JiWjjujtyRlvRkXFUyPos1SN7UDdJh-1rhzg342_0/https/i.imgur.com/vBGCOlT.jpg",
                "https://images-ext-1.discordapp.net/external/XBMWSynVNQg1QTiFy02oQ-_mVSfglmeBP8TIuTX9zQI/https/i.imgur.com/edvVad6.jpg"
                ],
                blue: ["https://images-ext-1.discordapp.net/external/1E5zg5ux2_yht_Po3qQmC2j04WegHq_7kAgwCm2MT_A/https/i.imgur.com/0v8aVQW.jpg",
                "https://images-ext-2.discordapp.net/external/fHXTgCrE8BCrmmdOFp0GqOTLAZRvS3B6cviuWygKocs/https/i.imgur.com/2cQaIsi.jpg",
                "https://images-ext-1.discordapp.net/external/unIQ1SUk0CABu_eyn8cWgAY5y9TlrbUNqk4RqOT9jyo/https/i.imgur.com/HucikI8.jpg",
                "https://i.imgur.com/TF3sYin.jpeg",
                "https://images-ext-2.discordapp.net/external/25LeOFTgPuQSS85V9IKTemnB4Nl3u1XH75sb8lDUKGE/https/i.imgur.com/V2ZCOgb.jpg"
                ],
                pink: ["https://images-ext-2.discordapp.net/external/pFXZlZWvphBRdL2YMPKQGpStPPpIfT1QYLRyz9oOdVQ/https/i.imgur.com/gGBnUZU.jpg",
                "https://images-ext-2.discordapp.net/external/QZGJmfS5RRkfu2-idlUmnt8hxAxdgYHd8ZgWmciYvvM/https/i.imgur.com/ogFzS8v.jpg",
                "https://images-ext-2.discordapp.net/external/XI6b4ymUqrW8kj_-fZQ-M5_OuQeE6hprwtUgKdbh8xo/https/i.imgur.com/PAFn0wi.jpg",
                "https://images-ext-2.discordapp.net/external/V30_KdCZF_Lb8oeUGbngwkyxJtsFCLWEj3BFEjWma9k/https/i.imgur.com/IgEn4tH.jpg",
                "https://images-ext-1.discordapp.net/external/8PfyhpYz-JYRUxZ4Y3basO-TCgbl1SaHysXV8rFJGKA/https/i.imgur.com/z5hTyUQ.jpg"
                ],
                nude: ["https://images-ext-2.discordapp.net/external/ujPcQSj3JRWkT_NZeEvYuxxtc6Rnn5IDu36jWuFmJzM/https/i.imgur.com/rlt3rEv.jpg",
                "https://images-ext-2.discordapp.net/external/DVLdx8qs2megIeMJs0Ax73i2e6TpZzRggIqPVw0JLSA/https/i.imgur.com/CiQMPQi.jpg",
                "https://images-ext-1.discordapp.net/external/qYKOdoSM4U2x7kyTF0KVi4-IEIf6MFiyWwP4JLOiDnw/https/i.imgur.com/EqUQrSy.jpg",
                "https://images-ext-2.discordapp.net/external/5OSPjVzDID2rzPa3Olh9ALI_x82I2v-vNkt3POQcD-w/https/i.imgur.com/EEm0RTQ.jpg",
                "https://images-ext-2.discordapp.net/external/N-MEIu1a-N1B9nLvz9avQpUutKsfZ9038u6fSrwttqc/https/i.imgur.com/l58KEAP.jpg"

                ],
                type: "sudadera",
                colors: ["white", "blue", "pink", "nude"],
                sizes: ["S", "M", "L", "XL", "XXL"],
                size_description: "https://images-ext-1.discordapp.net/external/e6PtWiz0fUwC3Z886d0egE8quxeVpNJPjAeiuYgBfdE/https/i.imgur.com/Of8WhBF.png",
                info: "MENSAJE INFORMATIVO"
             }
        ]
    }

];

export default products;