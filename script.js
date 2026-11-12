    document.addEventListener('DOMContentLoaded', () => {
      // 1. Dynamic Timeframe Switcher (Updates KPIs & Bar Chart Heights)
      const timeframeSelect = document.getElementById('timeframeSelect');
      const kpiRevenue = document.getElementById('kpiRevenue');
      const kpiOrders = document.getElementById('kpiOrders');
      const kpiUsers = document.getElementById('kpiUsers');
      const kpiRate = document.getElementById('kpiRate');
      const barFills = document.querySelectorAll('.bar-fill');

      const dashboardData = {
        month: {
          revenue: '$148,920',
          orders: '1,428',
          users: '9,840',
          rate: '4.8%',
          bars: ['48%', '62%', '55%', '76%', '84%', '96%']
        },
        quarter: {
          revenue: '$412,650',
          orders: '4,190',
          users: '14,320',
          rate: '5.2%',
          bars: ['64%', '71%', '68%', '85%', '90%', '98%']
        },
        year: {
          revenue: '$1,680,400',
          orders: '16,845',
          users: '28,500',
          rate: '5.7%',
          bars: ['52%', '66%', '74%', '82%', '91%', '100%']
        }
      };

      if (timeframeSelect) {
        timeframeSelect.addEventListener('change', (e) => {
          const selected = dashboardData[e.target.value];
          if (!selected) return;

          kpiRevenue.textContent = selected.revenue;
          kpiOrders.textContent = selected.orders;
          kpiUsers.textContent = selected.users;
          kpiRate.textContent = selected.rate;

          barFills.forEach((bar, index) => {
            if (selected.bars[index]) {
              bar.style.height = selected.bars[index];
            }
          });
        });
      }

      // 2. Live Search Filter for Recent Orders Table
      const orderSearch = document.getElementById('orderSearch');
      const tableRows = document.querySelectorAll('#ordersTableBody tr');

      if (orderSearch) {
        orderSearch.addEventListener('input', (e) => {
          const query = e.target.value.toLowerCase().trim();

          tableRows.forEach(row => {
            const rowText = row.textContent.toLowerCase();
            row.style.display = rowText.includes(query) ? '' : 'none';
          });
        });
      }

      // 3. Active Sidebar Link Highlight on Click
      const navItems = document.querySelectorAll('.sidebar-nav .nav-item');
      navItems.forEach(item => {
        item.addEventListener('click', () => {
          navItems.forEach(nav => nav.classList.remove('active'));
          item.classList.add('active');
        });
      });
    });