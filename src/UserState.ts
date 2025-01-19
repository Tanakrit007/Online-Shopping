// WebUser.ts
export class WebUser {
    private login_id: string;
    private password: string;
    private id?: string;
    private address?: string;
    private phone?: string;
    private email?: string;

    constructor(
        login_id: string,
        password: string,
        id?: string,
        address?: string,
        phone?: string,
        email?: string
    ) {
        this.login_id = login_id;
        this.password = password;
        this.id = id;
        this.address = address;
        this.phone = phone;
        this.email = email;
    }

    getLogin_id() {
        return this.login_id;
    }

    getState() {
        return "Active"; // ตัวอย่าง: ค่า state เริ่มต้น
    }

    getId() {
        return this.id || "N/A";
    }

    getAddress() {
        return this.address || "N/A";
    }

    getPhone() {
        return this.phone || "N/A";
    }

    getEmail() {
        return this.email || "N/A";
    }

    toString(): string {
        return `WebUser [login_id=${this.login_id}, id=${this.id}, email=${this.email}]`;
    }
}
