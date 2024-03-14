import * as Icons from "@pedidopago/react-icons";

import "./../../style/edit-position-page.css";

export function EditPositionPage() {
  return (
    <div>
      <div className="tab-title">
        <div className="icon-box">
          <Icons.ArrowLeft />
        </div>
        <h1>Novo Cargo</h1>
      </div>
      <div className="container">
        <div className="tab-subtitle">
          <a>Dados do cargo</a>
        </div>
        <div className="position-info-box">
          <form className="position-info">
            <input type="text" required />
            <span>Departamento</span>
          </form>
          <form className="position-info">
            <input type="text" required />
            <span>Cargo</span>
          </form>
        </div>
        <div className="table-title">
          <a>Listagem de cargos</a>
        </div>
        <div className="table-objects">
          <div className="position">Cargo</div>
          <div className="read">Ler</div>
          <div className="edit">Editar</div>
          <div className="delete">Excluir</div>
        </div>
        <div className="table-info">
          <div className="permission">Pedidos</div>
          <div className="input-box">
            <div className="checkbox-box">
              <div className="checkbox">
                <input type="checkbox" defaultChecked />
              </div>
            </div>
            <div className="checkbox-box">
              <div className="checkbox">
                <input type="checkbox" defaultChecked />
              </div>
            </div>
            <div className="checkbox-box">
              <div className="checkbox">
                <input type="checkbox" defaultChecked />
              </div>
            </div>
          </div>
        </div>
        <div className="table-info">
          <div className="permission">Clientes</div>
          <div className="input-box">
            <div className="checkbox-box">
              <div className="checkbox">
                <input type="checkbox" defaultChecked />
              </div>
            </div>
            <div className="checkbox-box">
              <div className="checkbox">
                <input type="checkbox" defaultChecked />
              </div>
            </div>
            <div className="checkbox-box">
              <div className="checkbox">
                <input type="checkbox" defaultChecked />
              </div>
            </div>
          </div>
        </div>
        <div className="table-info">
          <div className="permission">Marketing</div>
          <div className="input-box">
            <div className="checkbox-box">
              <div className="checkbox">
                <input type="checkbox" defaultChecked />
              </div>
            </div>
            <div className="checkbox-box">
              <div className="checkbox">
                <input type="checkbox" defaultChecked />
              </div>
            </div>
            <div className="checkbox-box">
              <div className="checkbox">
                <input type="checkbox" defaultChecked />
              </div>
            </div>
          </div>
        </div>
        <div className="table-info">
          <div className="permission">Colaboradores</div>
          <div className="input-box">
            <div className="checkbox-box">
              <div className="checkbox">
                <input type="checkbox" defaultChecked />
              </div>
            </div>
            <div className="checkbox-box">
              <div className="checkbox">
                <input type="checkbox" defaultChecked />
              </div>
            </div>
            <div className="checkbox-box">
              <div className="checkbox">
                <input type="checkbox" defaultChecked />
              </div>
            </div>
          </div>
        </div>
        <div className="table-info">
          <div className="permission">Cargos e permissões</div>
          <div className="input-box">
            <div className="checkbox-box">
              <div className="checkbox">
                <input type="checkbox" defaultChecked />
              </div>
            </div>
            <div className="checkbox-box">
              <div className="checkbox">
                <input type="checkbox" defaultChecked />
              </div>
            </div>
            <div className="checkbox-box">
              <div className="checkbox">
                <input type="checkbox" defaultChecked />
              </div>
            </div>
          </div>
        </div>
        <div className="table-info">
          <div className="permission">Catálogo</div>
          <div className="input-box">
            <div className="checkbox-box">
              <div className="checkbox">
                <input type="checkbox" defaultChecked />
              </div>
            </div>
            <div className="checkbox-box">
              <div className="checkbox">
                <input type="checkbox" defaultChecked />
              </div>
            </div>
            <div className="checkbox-box">
              <div className="checkbox">
                <input type="checkbox" defaultChecked />
              </div>
            </div>
          </div>
        </div>
        <div className="table-info">
          <div className="permission">Financeiro</div>
          <div className="input-box">
            <div className="checkbox-box">
              <div className="checkbox">
                <input type="checkbox" defaultChecked />
              </div>
            </div>
            <div className="checkbox-box">
              <div className="checkbox">
                <input type="checkbox" defaultChecked />
              </div>
            </div>
            <div className="checkbox-box">
              <div className="checkbox">
                <input type="checkbox" defaultChecked />
              </div>
            </div>
          </div>
        </div>
        <div className="table-info">
          <div className="permission">Website e Lojas físicas</div>
          <div className="input-box">
            <div className="checkbox-box">
              <div className="checkbox">
                <input type="checkbox" defaultChecked />
              </div>
            </div>
            <div className="checkbox-box">
              <div className="checkbox">
                <input type="checkbox" defaultChecked />
              </div>
            </div>
            <div className="checkbox-box">
              <div className="checkbox">
                <input type="checkbox" defaultChecked />
              </div>
            </div>
          </div>
        </div>
        <div className="tab-footer">
          <div className="buttons">
            <div className="cancel">
              <a>Cancelar</a>
            </div>
            <div className="save">
              <a>Salvar Alterações</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
