import BoardService from "../services/BoardService"

export default async function Page() {
	var bs = new BoardService();
	var result = await bs.find()
	//We
	return (
		<p>
			{result}
		</p>
	)
}
