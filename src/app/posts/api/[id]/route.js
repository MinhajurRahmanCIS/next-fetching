export async function PATCH(request, {params}) {
    console.log(params.id)
    const body = await request.json();
    const index = allUsers.findIndex((u) => u.id === parseInt(params.id));
    allUsers[index] = {
        name : body.name
    }
    return Response.json({
        message: "User update",
        allUsers
    })
}


export async function DELETE(request, {params}) { 
    const user = allUsers.filter((u) => u.id !== parseInt(params.id));
    return Response.json({
        message: "User Delete",
        user
    })
}


const allUsers = [
    {
        id: 1,
        name: "Newman"
    },
    {
        id: 2,
        name: "Rkz_Newman"
    },
    {
        id: 3,
        name: "Rockz"
    },
]