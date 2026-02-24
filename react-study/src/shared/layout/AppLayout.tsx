
import "./AppLayout.css";

export const AppLayout = ({ children }: React.PropsWithChildren) => {

    return (
        <div className="layout-base">
            <div className="layout-header"> 
                <button className="button-header"><a>Home</a></button>
                <button className="button-header"><a>Usuários</a></button>
            </div>

            {children} 
            <div>
            </div>
        </div>
    )
}