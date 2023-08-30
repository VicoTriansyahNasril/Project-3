// Ambil elemen-elemen yang dibutuhkan dari Document Objek Model
const allMembersContainer = document.querySelector('.Left .content');
const myFriendsContainer = document.querySelector('.Right .content2');
const jumlahMemberElement = document.getElementById('jumlahMember');
const jumlahMember2Element = document.getElementById('jumlahMember2');

// Fungsi untuk mengupdate jumlah anggota
function updateJumlahAnggota() {
    const jumlahMember = allMembersContainer.children.length;
    const jumlahMember2 = myFriendsContainer.children.length;

    jumlahMemberElement.textContent = `(${jumlahMember})`;
    jumlahMember2Element.textContent = `(${jumlahMember2})`;
}

function toggleFollow(button, friendBaris) {
    if (friendBaris.parentElement === myFriendsContainer) {
        // Pindahkan elemen dari My Friends ke All Members
        allMembersContainer.appendChild(friendBaris);

        // Ganti teks tombol Unfollow menjadi Follow
        button.textContent = 'Follow';
        // Ganti kelas untuk styling
        button.classList.remove('UnfollowText');
        button.classList.add('followText');
    } else if (friendBaris.parentElement === allMembersContainer) {
        // Pindahkan elemen dari All Members ke My Friends
        myFriendsContainer.appendChild(friendBaris);

        // Ganti teks tombol Follow menjadi Unfollow
        button.textContent = 'Unfollow';
        // Ganti kelas untuk styling
        button.classList.remove('followText');
        button.classList.add('UnfollowText');
    }

    // Update jumlah anggota setelah perpindahan
    updateJumlahAnggota();
}

// Event listener untuk tombol Follow dan Unfollow
allMembersContainer.addEventListener('click', (event) => {
    if (event.target.classList.contains('followText')) {
        const button = event.target;
        const friendBaris = button.parentElement;
        toggleFollow(button, friendBaris);
    }
});

myFriendsContainer.addEventListener('click', (event) => {
    if (event.target.classList.contains('UnfollowText')) {
        const button = event.target;
        const friendBaris = button.parentElement;
        toggleFollow(button, friendBaris);
    }
});
