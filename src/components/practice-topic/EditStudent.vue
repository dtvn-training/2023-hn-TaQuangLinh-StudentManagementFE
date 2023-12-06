<template>
    <div>
        <h1 class="text-center mb-5">Edit Student</h1>
        <el-form label-width="120px">
            <el-form-item label="Id" prop="index">
                <el-input type="text" autocomplete="off" :value="id"></el-input>
            </el-form-item>
            <el-form-item label="Name" prop="name">
                <el-input type="text" autocomplete="off" v-model="name" disable="true"></el-input>
            </el-form-item>
            <el-form-item label="Class" prop="class">
                <el-input type="text" autocomplete="off" v-model="className" disable="true"></el-input>
            </el-form-item>
            <el-form-item label="Literature" prop="literature">
                <el-input type="text" autocomplete="off" v-model="maths" disable="true"></el-input>
            </el-form-item>
            <el-form-item label="Maths" prop="maths">
                <el-input type="text" autocomplete="off" v-model="literature" disable="true"></el-input>
            </el-form-item>
            <el-form-item label="English" prop="english">
                <el-input type="text" autocomplete="off" v-model="english" disable="true"></el-input>
            </el-form-item>

            <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')">Save</el-button>
                <el-button @click="back">Return</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
export default {
    data() {
        return {
            name: this.$store.state.students[this.id].name,
            className: this.$store.state.students[this.id].class,
            literature: this.$store.state.students[this.id].literature,
            maths: this.$store.state.students[this.id].maths,
            english: this.$store.state.students[this.id].english
        }
    },
    props: ['id'],
    methods: {
        submitForm(formName) {
            let student = {
                name: this.name,
                class: this.className,
                literature: this.literature,
                maths: this.maths,
                english: this.english
            }
            this.$store.state.students.splice(this.id, 1, student)
            this.$message({
                type: 'success',
                message: 'Success!'
            });
            this.$router.push('/student');
        },
        back() {
            this.$router.push('/student');
        }
    }
}
</script>