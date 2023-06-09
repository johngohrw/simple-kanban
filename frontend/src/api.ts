export const API_ENDPOINT = 'http://localhost:3000/'

export async function editTaskAPI(taskId: number, body: object) {
    try {
        const res = await fetch(API_ENDPOINT + `task/${taskId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        });
        const result = await res.json();
        if (Object.hasOwn(result, 'error')) {
            console.error(result?.error);
        }
        return result
    } catch (e: any) {
        console.error(e);
    }
}

export async function editColumnAPI(columnId: number, body: object) {
    try {
        const res = await fetch(API_ENDPOINT + `column/${columnId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        });
        const result = await res.json();
        if (Object.hasOwn(result, 'error')) {
            console.error(result?.error);
        }
        return result
    } catch (e: any) {
        console.error(e);
    }
}

export async function addTaskAPI(body: object) {
    try {
        const res = await fetch(API_ENDPOINT + `task/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        });
        const result = await res.json();
        if (Object.hasOwn(result, 'error')) {
            console.error(result?.error);
        }
        return result
    } catch (e: any) {
        console.error(e);
    }
}

export async function addColumnAPI(body: object) {
    try {
        const res = await fetch(API_ENDPOINT + `column/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        });
        const result = await res.json();
        if (Object.hasOwn(result, 'error')) {
            console.error(result?.error);
        }
        return result
    } catch (e: any) {
        console.error(e);
    }
}