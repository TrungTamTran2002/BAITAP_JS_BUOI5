function enrollmentManagement() {
    document.getElementById('btnb1').onclick = function() {
        let diemchuan = document.getElementById('Benchmark').value *1;
        let khuvuc = document.getElementById('area').value;
        let doituong = document.getElementById('category').value;
        let score1 = document.getElementById('score1').value *1;
        let score2 = document.getElementById('score2').value *1;
        let score3 = document.getElementById('score3').value *1;
        
        // điểm chuẩn ban đầu chỉ được nhỏ hơn hoặc = 30
        if (diemchuan > 30) {
            alert("Điểm chuẩn không được lớn hơn 30. Vui lòng nhập lại.");
            return;
        }

        if (score1 === 0 || score2 === 0 || score3 === 0) {
            document.getElementById('presultb1').innerHTML = "<p>Bạn đã rớt do có môn bị điểm 0.</p>";
            return;
        }

        // Tính điểm cộng theo khu vực
        let totalscore = score1 + score2 + score3;
        switch (khuvuc) {
            case "a":
                totalscore += 2;
                break;
            case "b":
                totalscore += 1;
                break;
            case "c":
                totalscore += 0.5;
                break;
            default:
                totalscore += 0;
                break;
        }
    
        // Tính điểm cộng thêm theo đối tượng
        switch (doituong) {
            case "1":
                totalscore += 2.5;
                break;
            case "2":
                totalscore += 1.5;
                break;
            case "3":
                totalscore += 1;
                break;
            default:
                totalscore += 0;
                break;
        }

        if (totalscore >= diemchuan) {
            document.getElementById('presultb1').innerHTML = "<p>Bạn Đã Đậu. Tổng điểm: " + totalscore + "</p>";
        } else {
            document.getElementById('presultb1').innerHTML = "<p>Bạn Đã Rớt. Tổng điểm: " + totalscore + "</p>";
        }
    }
}

function calculateElectric() {
    document.getElementById('btnb2').onclick = function() {
        let fullname = document.getElementById('fullname').value;
        let numberkw = document.getElementById('numberkw').value*1;
        
        let totalCost = 0;
        if (numberkw <= 50) {
            totalCost = numberkw * 500;
        } else if (numberkw <= 100) {
            totalCost = (50 * 500) + ((numberkw - 50) * 650);
        } else if (numberkw <= 200) {
            totalCost = (50 * 500) + (50 * 650) + ((numberkw - 100) * 850);
        } else if (numberkw <= 350) {
            totalCost = (50 * 500) + (50 * 650) + (100 * 850) + ((numberkw - 200) * 1100);
        } else {
            totalCost = (50 * 500) + (50 * 650) + (100 * 850) + (150 * 1100) + ((numberkw - 350) * 1300);
        }

        // Định dạng hiển thị số tiền
        let formatter = new Intl.NumberFormat('vi-VN', {
            style: 'currency',
            currency: 'VND',
            minimumFractionDigits: 0
        });
        
        document.getElementById("presultb2").innerHTML = 
            "<p>Họ và tên: " + fullname + "</p><p>Tổng tiền điện: " + totalCost + "</p>";
    }
}

function calculateTax() {
    document.getElementById('btnb3').onclick = function() {
        let fullname = document.getElementById('fullnameb3').value;
        let annualIncome = document.getElementById('annualIncome').value * 1; // Tổng thu nhập 
        let numDependents = document.getElementById('numDependents').value * 1; // Số người phụ thuộc

        // Tính thu nhập chịu thuế
        let taxableIncome = annualIncome - 4e+6 - (numDependents * 1.6e+6);
        let totalTax = 0;

        // Tính thuế dựa trên các bậc thuế
        if (taxableIncome <= 60e+6) {
            totalTax = taxableIncome * 0.05;
        } else if (taxableIncome <= 120e+6) {
            totalTax = (60e+6 * 0.05) + ((taxableIncome - 60e+6) * 0.1);
        } else if (taxableIncome <= 210e+6) {
            totalTax = (60e+6 * 0.05) + (60e+6 * 0.1) + ((taxableIncome - 120e+6) * 0.15);
        } else if (taxableIncome <= 384e+6) {
            totalTax = (60e+6 * 0.05) + (60e+6 * 0.1) + (90e+6 * 0.15) + ((taxableIncome - 210e+6) * 0.2);
        } else if (taxableIncome <= 624e+6) {
            totalTax = (60e+6 * 0.05) + (60e+6 * 0.1) + (90e+6 * 0.15) + (174e+6 * 0.2) + ((taxableIncome - 384e+6) * 0.25);
        } else if (taxableIncome <= 960e+6) {
            totalTax = (60e+6 * 0.05) + (60e+6 * 0.1) + (90e+6 * 0.15) + (174e+6 * 0.2) + (240e+6 * 0.25) + ((taxableIncome - 624e+6) * 0.3);
        } else {
            totalTax = (60e+6 * 0.05) + (60e+6 * 0.1) + (90e+6 * 0.15) + (174e+6 * 0.2) + (240e+6 * 0.25) + (336e+6 * 0.3) + ((taxableIncome - 960e+6) * 0.35);
        }

        // Hiển thị kết quả vào thẻ div có id "presultb2"
        document.getElementById("presultb3").innerHTML = 
            "<p>Họ và tên: " + fullname + "</p><p>Tổng thuế thu nhập cá nhân: " + totalTax + "</p>";
    }
}

function toggleConnections() {
    const customerType = document.getElementById("customerType").value;
    const connections = document.getElementById("connections");
    
    if (customerType === "business") {
        connections.disabled = false;
    } else {
        connections.disabled = true;
        connections.value = "";
    }
}

function toggleConnections() {
    const customerType = document.getElementById("customerType").value;
    const connections = document.getElementById("connections");
    
    if (customerType === "business") {
        connections.disabled = false;
    } else {
        connections.disabled = true;
        connections.value = "";
    }
}

function calculateCableBill() {
    const customerCode = document.getElementById("customerCode").value;
    const customerType = document.getElementById("customerType").value;
    const connections = parseInt(document.getElementById("connections").value) || 0;
    const premiumChannels = parseInt(document.getElementById("premiumChannels").value) || 0;
    let totalCost = 0;

    if (customerType === "individual") {
        // Nhà dân
        const processingFee = 4.5;
        const basicServiceFee = 20.5;
        const premiumChannelFee = 7.5;
        
        totalCost = processingFee + basicServiceFee + (premiumChannels * premiumChannelFee);
    } else if (customerType === "business") {
        // Doanh nghiệp
        const processingFee = 15;
        const basicServiceFee = 75;
        const premiumChannelFee = 50;
        
        if (connections <= 10) {
            totalCost = processingFee + basicServiceFee + (premiumChannels * premiumChannelFee);
        } else {
            const additionalConnectionFee = (connections - 10) * 5;
            totalCost = processingFee + basicServiceFee + additionalConnectionFee + (premiumChannels * premiumChannelFee);
        }
    }

    // Định dạng số tiền
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2
    });

    // Hiển thị kết quả
    document.getElementById("result").innerHTML = 
        `<p>👉 Mã khách hàng: ${customerCode}; Tiền cáp: ${formatter.format(totalCost)}</p>`;
}



