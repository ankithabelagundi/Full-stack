import { useState, useEffect } from "react";
import API from "../api";

export default function Statement() {

    const [data, setData] = useState([]);

    useEffect(() => {
        API.get("/account/statement").then((res) => {
            setData(res.data);
        });
    }, []);

    return (
        <table border="1">
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Type</th>
                    <th>Amount</th>
                </tr>
            </thead>

            <tbody>
                {data.map((t) => (
                    <tr key={t.id}>
                        <td>{t.created_at}</td>

                        <td
                            style={{
                                color:
                                    t.transaction_type === "credit"
                                        ? "green"
                                        : "red",
                            }}
                        >
                            {t.transaction_type}
                        </td>

                        <td>{t.amount}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}