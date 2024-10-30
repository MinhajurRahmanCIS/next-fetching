export async function GET() {
    return Response.json(allUsers, {
        headers: {
            "Set-Cookie" : "next=fetch"
        }
    })
}

export async function POST(request) {
    const newUser = await request.json()
    allUsers.push({
        id: allUsers.length + 1,
        name: newUser.name
    })
    return Response.json({
        message: "New User Added",
        allUsers
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