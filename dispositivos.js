import { input, select } from "@inquirer/prompts";
let dispositivos = [];

async function fin() {
    while (true) {
        const opcion = await select({
            message: "Nuestros dispositivos telefonicos",
            choices: [
                { name: "Samsung Galaxy S23", value: "Samsung Galaxy S23" },
                { name: "iPhone 14 Pro", value: "iPhone 14 Pro" },
                { name: "Oppno Reno12F 5G", value: "Oppo reno12F 5G" },
                { name: "Deseas ver otros Electronicos", value: "Deseas ver otros Electronicos" },
                { name: "exit", value: "exit" }
            ]
        });
        if (opcion === "Samsung Galaxy S23") {
            await input({
                message: "Ingrese la contraseña del dispositivo para desbloquearlo",
                validate: (input) => {
                    if (input === "1234") {
                        dispositivos.push("Samsung Galaxy S23");
                        console.log(" Dispositivo desbloqueado:");
                        console.log("El valor es de $3200000");
                        return true;

                    } else {
                        return "Contraseña incorrecta, intente de nuevo.";
                    }
                }
            });
        }
        if (opcion === "iPhone 14 Pro") {
            await input({
                message: "Ingrese la contraseña del dispositivo para desbloquearlo",
                validate: (input) => {
                     if (input === "abcd") {
                        dispositivos.push("iphone 14 Pro");
                        console.log(" Dispositivo desbloqueado:");
                        console.log("El valor es de $4200000");
                        return true;

                    } else {
                        return "Contraseña incorrecta, intente de nuevo.";
                    }
                }
            });
        }
        if (opcion === "Oppo reno12F 5G") {
            await input({
                message: "Ingrese la contraseña del dispositivo para desbloquearlo",
                validate: (input) => {
                    if (input === "5678") {
                        dispositivos.push("Oppo reno12F 5G");
                        console.log(" Dispositivo desbloqueado:");
                        console.log("El valor es de $1200000");
                        return true;

                    } else {
                        return "Contraseña incorrecta, intente de nuevo.";
                    }
                }
            });
        }
        if (opcion === "Deseas ver otros Electronicos") {
            const opcion2 = await select({
                message: "Nuestros dispositivos electronicos",
                choices: [
                    { name: "Portatil HP", value: "Portatil HP" },
                    { name: "MacBook Pro", value: "MacBook Pro" },
                    { name: "Asus ROG", value: "Asus ROG" },
                    { name: "exit", value: "exit" }
                ]
            });
            if (opcion2 === "exit") {
                console.log("Saliendo de la agenda...");
                break;
            }
        }
        if (opcion === "exit") {
            console.log("Saliendo de la agenda...");
            break;
        }
    }
}

fin();

