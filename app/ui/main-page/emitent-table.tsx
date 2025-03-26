import EmitentTableRow from "./emitent-table-row"

interface Props {
    emitentName: string,
    setEmitentName: React.Dispatch<React.SetStateAction<string>>
}

const emitents= [
    {name: "ОАО ТЕСТОВЫЙ ЭМИТЕНТ", email: "11111"},
    {name: "ОАО СУПЕР ТЕСТОВЫЙ ЭМИТЕНТ", email: "22222"},
    {name: "ОАО СУПЕР-ПУПЕР ТЕСТОВЫЙ ЭМИТЕНТ", email: "333333"},
]

export default function EmitentTable ({emitentName, setEmitentName}: Props) {
    return (
        <table className="border-collapse border-[2px] border-black">
            <thead>
              <tr className="">
                <th className="w-[240px] text-[24px]/[35px] bg-[#D9D9D9] border-[2px] border-black">Действие</th>
                <th className="w-[600px] text-[24px]/[35px] bg-[#D9D9D9] border-[2px] border-black">Название эмитента</th>
              </tr>
            </thead>
            <tbody>
              {emitents.map((emitent) => {
                    return (
                        <EmitentTableRow
                            key={emitent.email}
                            emitentName={emitentName} 
                            setEmitentName={setEmitentName} 
                            name={emitent.name}
                        />
                    );
                })}
            </tbody>
        </table>
    )
}