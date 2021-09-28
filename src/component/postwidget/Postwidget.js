import "./postwidget.css"

export const Postwidget = () => {
    return (
        <div className="postwidget">
            <h5>New Posts in last 7 days</h5>
            <div >
                <table className="postTable">
                    <tr>
                        <th>Blog Title</th>
                        <th>Category</th>
                        <th>Publsih Date</th>
                    </tr>
                    <tr>
                        <td>Opps constraints</td>
                        <td>Java</td>
                        <td>17.01.2021</td>
                    </tr>
                    <tr>
                        <td>Opps constraints</td>
                        <td>Java</td>
                        <td>17.01.2021</td>
                    </tr>
                    <tr>
                        <td>Opps constraints</td>
                        <td>Java</td>
                        <td>17.01.2021</td>
                    </tr>
                </table>
            </div>
        </div>
    )
}
