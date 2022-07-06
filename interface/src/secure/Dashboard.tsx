import Wrapper from "./Wrapper.tsx";


const Dashboard = () => (
	<Wrapper>
		<h2>Section title</h2>
        <div className="table-responsive">
            <table className="table table-striped table-sm">
                <thead>
                    <tr>
                      	<th scope="col">#</th>
                      	<th scope="col">Header</th>
                      	<th scope="col">Header</th>
                      	<th scope="col">Header</th>
                      	<th scope="col">Header</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1,001</td>
                        <td>random</td>
                        <td>data</td>
                        <td>placeholder</td>
                        <td>text</td>
                    </tr>
                    <tr>
                        <td>1,002</td>
                        <td>placeholder</td>
                        <td>irrelevant</td>
                        <td>visual</td>
                        <td>layout</td>
                    </tr>
                </tbody>
            </table>
        </div>
	</Wrapper>
)

export default Dashboard;